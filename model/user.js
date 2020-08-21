const { Model } = require('objection');

class Post extends Model {
    static get tableName() {
        return 'post';
    };
    
  static get relationMappings() {
    return {

    }
  }
};

module.exports = Post;


