import API from ".";

export const getStudents = async () => {
  try {
    const res = await API.get("/students");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getSingleStudent = async () => {
  try {
    //
  } catch (error) {
    throw error;
  }
};

export const createStudent = async () => {
  try {
    //
  } catch (error) {
    throw error;
  }
};

export const updateStudent = async () => {
  try {
    //
  } catch (error) {
    throw error;
  }
};

export const deleteStudent = async () => {
  try {
    //
  } catch (error) {
    throw error;
  }
};
