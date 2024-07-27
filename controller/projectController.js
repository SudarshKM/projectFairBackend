const projects = require("../model/projectModel");

exports.addProjectController = async (req, res) => {
  const userId = req.payload;
  console.log(userId);
  // console.log(req.body);
  // console.log(req.file);

  const { title, language, github, website, overview } = req.body;
  const projImage = req.file.filename;

//   res.status(200).json("ok");

  try {
    const existingProject = await projects.findOne({ website });

    if (existingProject) {
      res.status(406).json(`Project already exist`);
    } else {
      const newProject = new projects({
        title,
        language,
        github,
        website,
        overview,
        projImage,
        userId

      });
      await newProject.save();
      res.status(200).json(newProject);
    }
  } catch (error) {
    res.status(401).json(error);
  }
};



exports.getAllProjectsController=async (req,res)=>{
  const searchKey = req.query.search;

  console.log(searchKey);
  try {
    const query = {
      language:{$regex:searchKey,$options:'i'}
    }

    const allProjects = await projects.find(query)
    if(allProjects){
      res.status(200).json(allProjects)
    }else{
      res.status(406).json("No Projects")
    }
  } catch (error) {
    res.status(401).json(error)
  }
}


exports.homeProjectsController=async (req,res)=>{
  try {
    const homeProjects = await projects.find().limit(3)
    if(homeProjects){
      res.status(200).json(homeProjects)
    }else{
      res.status(406).json("No Projects")
    }
  } catch (error) {
    res.status(401).json(error)
  }
}


exports.userProjectController = async (req,res) =>{
  const userId = req.payload;

  console.log(userId);

  try {
    const userProjects = await projects.find({userId})

    if(userProjects) {
      res.status(200).json(userProjects)
    } else{
      res.status(406).json("no projects")
    }
    
  } catch (error) {
    res.status(401).json(error)
  }
}