const List = {
  list: [
    {
      id: 1,
      title: "Route 1",
    },
    {
      id: 2,
      title: "Zirakpur Route",
    },
    // {
    //   id: 3,
    //   title: "Route 12",
    // },
    // {
    //   id: 4,
    //   title: "Old Panchkula Route",
    // },
    // {
    //   id: 5,
    //   title: "Manimajra Route",
    // },
    // {
    //   id: 6,
    //   title: "Patiala phase 2",
    // },
  ],
  getList: function () {
    return (
      (localStorage.getItem("theList") &&
        JSON.parse(localStorage.getItem("theList"))) ||
      this.list
    );
  },
  saveList: (list) => {
    localStorage.setItem("theList", JSON.stringify(list));
  },
};

export default List;