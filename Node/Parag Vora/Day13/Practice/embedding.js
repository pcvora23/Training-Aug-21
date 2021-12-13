const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  author:authorSchema
}));

async function createCourse(name, author) {
  const course = new Course({
    name, 
    author
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(CourseId)
{
  const course = await Course.updateOne({_id:CourseId},
    {
      $set:
      {
        'author.name':'chirag'
      }
    });
  // course.author.name = 'rushit tpoya';
  // course.save();
}

// createCourse('react Course', new Author({ name: 'john',bio:'writer',website:'abc.com' }));
updateAuthor('6197313f618678da2a87f66d');