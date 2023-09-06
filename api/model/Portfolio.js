const db = require ("../config")

//----------Targeting category options-----------
//need to import logic from frontend
 
//-----------------------------------------------
class Portfolios{
    // fetch all Portfolios
    fetchPortfolios(req,res){
            const query =`
            SELECT   portfolioID,
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
            FROM portfolio 
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
        SELECT   portfolioID,
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
            FROM portfolio 
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
    registerPortfolio(req, res) {
        const data = req.body;
        const query = `
        INSERT INTO portfolio
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
        UPDATE portfolio
        SET ?
        WHERE portfolioID = ${req.params.id};
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
        DELETE FROM portfolio
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
