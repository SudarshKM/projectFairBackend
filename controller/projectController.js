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
    //   res.status(200).json(newProject);
    }
  } catch (error) {
    res.status(406).json(error);
  }
};
