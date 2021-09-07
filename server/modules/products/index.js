const productModel = require("./model");


const handlers = {
  async findMany(req, res, next) {
    try {
      let {
        pageIndex,
        pageSize,
        sortBy, //title,
        sort, //'asc: tang dan' | 'desc : giam dan'
        search = "",
        fields = "",
      } = req.query;
      pageSize = parseInt(pageSize) || 20;
      pageIndex = parseInt(pageIndex) || 1;

      let limit = pageSize;
      let skip = (pageIndex - 1) * pageSize;
      let sortInfo = `${sort == "desc" ? "-" : ""}${sortBy}`;
      let conditions = {};
      if (search) {
        conditions.title = new RegExp(search, "i");
      }
      //Lọc
      let fildsArray = fields.split(",").map((field) => field.trim());

      let items = await productModel
        .find(conditions, fildsArray)
        .skip(skip)
        .limit(limit)
        .sort(sortInfo);

      res.json(items);
    } catch (err) {
      next(err);
    }
  },
  async findOne(req, res, next) {
    try {
      let id = req.params.id;
      let item = await productModel.findById(id);
      res.json(item);
    } catch (err) {
      next(err);
    }
  },
  async create(req, res, next) {

    if (req.body.title) {
      const newProduct = new productModel();
      newProduct.title = req.body.title;
      newProduct.image = req.body.image;
      newProduct.price = req.body.price;
      newProduct.categorySlug = req.body.categorySlug;
      newProduct.producer = req.body.producer;
      newProduct.slug = req.body.slug;
      newProduct.description = req.body.description;
      try {
        const Product = await newProduct.save();
        res.status(200).send({ message: "Thêm sản phẩm thành công" });
      } catch (err) {
        res.status(400).send(err);
      }
    } else {
      res.status(400).send({ error: "Thiếu đầu vào" });
    }
  },

  async update(req, res, next) {
    try {
      let data = req.body;
      let id = req.params.id;

      if (!id) {
        throw new Error(`Require 'id' to update!`);
      }

      let item = await productModel.findByIdAndUpdate(id, data, { new: true });
      res.json(item);
    } catch (err) {
      next(err);
    }
  },
  async delete(req, res, next) {
    try {
      let id = req.params.id;
      let item = await productModel.findByIdAndDelete(id);
      res.json(item);
    } catch (error) {
      next(error);
    }
  },

  async getImg(req, res, next) {
    // console.log(filepath);
    // fs.readFile(filepath, function (err, data) {
    //   if (err) throw err; // Fail if the file can't be read.
    //   res.writeHead(200, { "Content-Type": "image/jpeg" });
    //   res.end(data); // Send the file data to the browser.
    // });
  },
};

module.exports = handlers;
