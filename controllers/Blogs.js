import { getDataFromToken } from '../middleware/getDataFromToken.js';
import Blogs from '../models/BlogModel.js';
import jwt_decode from 'jwt-decode';

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.findAll({
      attributes: ['id', 'name', 'email'],
    });
    res.json(blogs);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      errorMessage: 'Not Able to fetch blogs',
    });
  }
};

export const CreateBlog = async (req, res) => {
  const { title, description } = req.body;

  const authHeader = req.headers['authorization'];
  console.log('auth  ', authHeader);
  const token = authHeader && authHeader.split(' ')[1];
  const data = jwt_decode(token);
  console.log('data: ', data);

  try {
    const response = await Blogs.create({
      title,
      adminId: data?.userId,
      description,
      status: 1, // DRAFT = 1, PUBLISHED = 2, DELETED = 0
    });
    console.log('reeeeeess', response);
    res.status(200).json({ msg: 'Blog Created Successfully', data: response });
  } catch (error) {
    console.log('position:  ', error);
    res.status(400).json({
      msg: 'Registration Failed',
      errorMessage: error.errors[0].message,
    });
  }
};
