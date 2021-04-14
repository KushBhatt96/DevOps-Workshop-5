const DUMMY_POSTS = [
  {
    firstName: 'Michael',
    LastName: 'Jordan',
    description: 'This is a pretty cool app.',
  },
  {
    firstName: 'Lebron',
    LastName: 'James',
    description: 'Docker is kinda sweet.',
  },
  {
    firstName: 'Stephen',
    LastName: 'Curry',
    description: 'DevOps workshops are the best.',
  },
];

const getAllPosts = (req, res, next) => {
  res.json({ data: DUMMY_POSTS });
};

const createPost = (req, res, next) => {
  const { firstName, lastName, description } = req.body;
  const newPost = {
    firstName,
    lastName,
    description,
  };

  DUMMY_POSTS.push(newPost);

  // 201 is a standard status code if something was successfully created on the server
  res.status(201).json({ data: newPost });
};

exports.getAllPosts = getAllPosts;
exports.createPost = createPost;
