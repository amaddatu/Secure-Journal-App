module.exports = function(sequelize, DataTypes) {
  var JournalEntry = sequelize.define("JournalEntry", {
    title: DataTypes.STRING,
    mood: DataTypes.STRING,
    blog: DataTypes.TEXT
  });
  return JournalEntry;
};
