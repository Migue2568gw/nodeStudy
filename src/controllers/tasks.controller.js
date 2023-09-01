import Task from "../models/Task";

export const renderTask = async (req, res) => {
  const taskList = await Task.find().lean();
  res.render("index", { tasks: taskList });
};

export const addTask = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.error("Error al guardar la tarea:", error);
  }
};

export const editGTask = async (req, res) => {
  const task = await Task.findById(req.params.id).lean();
  res.render("edit", { tasks: task });
};

export const editPTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  } catch (error) {
    console.error("Error al actualizar la tarea:", error);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.error("Error al eliminar la tarea:", error);
    res.status(500).send("Error al eliminar la tarea ");
  }
};

export const toggleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;

    await task.save();
    res.redirect("/");
  } catch (error) {
    console.error("Error al realizar Done de la tarea:", error);
    res.status(500).send("Error al Done de la tarea ");
  }
};