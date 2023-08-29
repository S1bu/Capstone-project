const db = require ("../config")

//----------Targeting category options-----------
//need to import logic from frontend
 
//-----------------------------------------------
class Portfolios{
    // fetch all Portfolios
    fetchPortfolios(req,res){
            const query =`
            SELECT SELECT
            Portfolio.portfolioID,
            Portfolio.userID,
            Portfolio.accountName,
            Subject.SubjectID,
            Subject.subject,
            Subject.Description,
            Subject.experience,
            Subject.price,
            Subject.email,
            Subject.country,
            Subject.city,
            Subject.linkedinUrl,
            Subject.instaUrl,
            Subject.facebookUrl
        FROM
            Portfolio
        JOIN
            Subject ON Portfolio.portfolioID = Subject.portfolioID;
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
    fetchPortfolio(req, res){
        const query = `
        SELECT SELECT
        Portfolio.portfolioID,
        Portfolio.userID,
        Portfolio.accountName,
        Subject.SubjectID,
        Subject.subject,
        Subject.Description,
        Subject.experience,
        Subject.price,
        Subject.email,
        Subject.country,
        Subject.city,
        Subject.linkedinUrl,
        Subject.instaUrl,
        Subject.facebookUrl
    FROM
        Portfolio
    JOIN
        Subject ON Portfolio.portfolioID = Subject.portfolioID;
        WHERE Portfolio.portfolioID  = ?;
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
    registerPortfolio(req, res) {
        const data = req.body;
        const query = `
        INSERT INTO Portfolio
        SET ?;
        `;
    
        db.query(query, [data], (err) => {
            if (err) {
                console.error("Error registering Portfolio:", err);
                return res.status(500).json({
                    status: 500,
                    error: "Failed to register the Portfolio"
                });
            }
    
            res.json({
                status: res.statusCode,
                msg: "Portfolio registered successfully"
            });
        });
    }
    //update portfolio
    updatePortfolio(req, res){
        const data = req.body
        const query =`
        UPDATE Portfolio
        SET ?
        WHERE portfolioID = ?;
        `
        db.query(query,[data, req.params.id],
            (err) => {
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg:"Portfolio has been updated."
                })
            })
    }
    //delete portfolio
    deletePortfolio(req,res){
        const query =
         `
        DELETE FROM Portfolio
        WHERE portfolioID = ${req.params.id};
        `
        db.query(query, (err) => {
            if(err) throw err
            res.json({
        status:res.statusCode,
        msg:'Portfolio was deleted.'
        })
        })
    }
}

module.exports  = Portfolios;
