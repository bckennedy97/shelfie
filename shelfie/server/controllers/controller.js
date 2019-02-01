module.exports={
    getAll:(req,res,next)=>{
        const db = req.app.get("db")
        db.get_products().then(products=>{
            res.status(200).json(products)
        }).catch(err=>res.json(err.detail))

    },
    create:(req,res,next)=>{
        const db = req.app.get("db")
        const {name,price,image_url} = req.body
        db.create_product([name,price,image_url]).then(product=>{
            res.status(200).json(product)
        }).catch(err=>res.status(500).json(err.detail))
    },
    update:(req,res,next)=>{
        const db = req.app.get("db")
        const {product_id} = req.params
        const {name,price,image_url} = req.body
        db.update_product([name,price,image_url,product_id]).then(product=>{
            res.status(200).json(product)
        }).catch(err=>res.status(500).json(err.detail))

    },
    delete:(req,res,next)=>{
        const db = req.app.get("db")
        const {product_id} = req.params
        db.delete_product([product_id]).then(product=>{
            res.status(200).json(product)
        }).catch(err=>res.status(500).json(err.detail))

    }
}