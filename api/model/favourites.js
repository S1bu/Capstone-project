const db = require ("../config")

//----------Targeting category options-----------
//need to import logic from frontend
 
//-----------------------------------------------
class Favourites {
    // fetch all favourites 
    fetchFavourites (req,res){
            const query =`
            SELECT  favID,
            userID,
            portfolioiImageUrl,
            accountName,
            subject,
            Description,
            experience,
            price,
            emailAdd,
            phone,
            country,
            city,
            linkedinUrl,
            instaUrl,
            facebookUrl 
            FROM favourites 
            `
            db.query(query,
                (err,results) => {
                    if(err) throw err
                    res.json({ 
                        status:res.statusCode,
                        results
                    })
                })
    }
    // fetch single Portfolios
    fetchFavourite (req, res){
        const query = `
        SELECT   favID,
            accountName,
             portfolioiImageUrl,
            subject,
            Description,
            experience,
            price,
            emailAdd,
            phone,
            country,
            city,
            linkedinUrl,
            instaUrl,
            facebookUrl
            FROM favourites 
        WHERE portfolioID  = ?;
        `
        db.query(query, [req.params.id], (err, result) => {
            if (err) { 
                console.error(err);
                res.status(500).json({
                    error: "An error occurred while fetching the Portfolio.",
                });
            } else {
                res.status(200).json({
                    status: res.statusCode,
                    result,
                });
            }
        });
    }
    //register Portfolio
    registerFavourite(req, res) {
        const data = req.body;
        const query = `
        INSERT INTO favourites 
        SET ?;
        `;
    
        db.query(query, [data], (err) => {
            if (err) {
                console.error("Error registering favourite :", err);
                return res.status(500).json({
                    status: 500,
                    error: "Failed to register the favourite "
                });
            }
    
            res.json({
                status: res.statusCode,
                msg: "favourite  registered successfully"
            });
        });
    }
   
    //delete portfolio
    deletePortfolio(req,res){
        const query =
         `
        DELETE FROM favourites
        WHERE favID = ${req.params.id};
        `
        db.query(query, (err) => {
            if(err) throw err
            res.json({
        status:res.statusCode,
        msg:'favourites  was deleted.'
        })
        })
    }
}

module.exports  = Favourites;
