const User = require('./User');
const Bar = require('./bars.js');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Bar.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Bar };
