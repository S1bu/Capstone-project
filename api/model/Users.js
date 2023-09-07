const db = require ("../config")
const {hash, compare, hashSync} = require ('bcrypt')
const {createToken} = require('../middleware/AuthenticateUser')

class Users{
    //fetch users
    fetchUsers(req, res){
        const query =`
        SELECT userID,
        userPic,
        FirstName,
        LastName,
        emailAdd,
        age,
        userRole,
        uPassword
        FROM users; `
        db.query(query,
             (err, results) => {
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    results
                })
             } )
    }
    //fetch single user
    fetchUser(req, res) {
        const query = `
         SELECT userID,
        userPic,
        FirstName,
        LastName,
        emailAdd,
        age,
        userRole,
        uPassword
        FROM users;
        WHERE userID = ?;
        `;
    
        db.query(query, [req.params.id], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({
                    error: "An error occurred while fetching the user.",
                });
            } else {
                res.status(200).json({
                    status: res.statusCode,
                    result,
                });
            }
        });
    }
    //---------------------------------
    //login a user
    login(req, res) {
        const {emailAdd, uPassword} = req.body // pipeline
        // query
        const query = `
        SELECT userID,
        FirstName,
        LastName,
        emailAdd,
        uPassword
        FROM users
        WHERE emailAdd = '${emailAdd}';
        `
        db.query(query, async (err, result)=>{
            if(err) throw err
            if(!result?.length){
                res.json({
                    status: res.statusCode,
                    msg: "You provided a wrong email."
                })
            }else{
                await compare(userPass,
                    result[0].uPassword,
                    (cErr, cResult)=>{
                        if(cErr) throw cErr
                        // Create a token
                        const token =
                        createToken({
                            emailAdd,
                            uPassword
                        })
                    
                        if(cResult) {
                            res.json({
                                msg: "Logged in",
                                token,
                                result: result[0]
                            })
                        }else {
                            res.json({
                                status: res.statusCode,
                                msg:
                                "Invalid password or you have not registered"
                            })
                            console.log(token)
                        }
                    })
            }
        })
    }
    //register a user
   async register(req,res){
        const data = req.body
        data.userPass = await hash(data.userPass,15)
        const user = {
            emailAdd:data.emailAdd,
            uPassword:data.uPassword
        }
        const query = `
        INSERT INTO users
        SET ?
        `
        db.query(query,[data],(err) => {
            if(err) throw err
            let token = createToken(user)
            res.json ({
                status: res.statusCode,
                msg: "You are now registered"
            })
        })
    }
//update user
    updateUser(req,res){
        const data = req.body
        if(data.uPassword){
            data.uPassword = 
            hashSync(data.uPassword, 10)
        }
    const query =`
        UPDATE users
        SET?
        WHERE userID = ?;
        `
        db.query(query,[data, req.params.id],
            (err) => {
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg:"User information updated"
                })
            })
    }
    //delete a user
    deleteUser(req,res){
        const query =
         `
        DELETE FROM users
        WHERE userID = ${req.params.id};
        `
        db.query(query, (err) => {
            if(err) throw err
            res.json({
        status:res.statusCode,
        msg:'The user records were deleted.'
        })
        })
    }
}

module.exports = Users;
