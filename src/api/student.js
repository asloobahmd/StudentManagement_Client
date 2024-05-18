import API from ".";

export const getStudents = async ({
  currentPage,
  pageSize,
  q,
  course,
  sortBy,
}) => {
  try {
    const res = await API.get("/students", {
      params: {
        page: currentPage,
        pageSize: pageSize,
        q: q,
        course: course,
        sortBy: sortBy,
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getSingleStudent = async (id) => {
  try {
    const res = await API.get(`/students/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createStudent = async (payload) => {
  try {
    const res = await API.post("/students", payload);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateStudent = async (id, payload) => {
  try {
    const res = await API.put(`/students/${id}`, payload);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteStudent = async (id) => {
  try {
    const res = await API.delete(`/students/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};
