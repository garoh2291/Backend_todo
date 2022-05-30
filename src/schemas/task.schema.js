const mongoose = require('mongoose'),
  mongoosePaginate = require('mongoose-paginate'),
  Schema = mongoose.Schema,
  ObjectId = Schema.Types.ObjectId;

const TaskSchema = new Schema(
  {
    owner: {
      type: ObjectId,
      ref: 'User',
      required: true
    },
      title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
      priority:{
      type: String,
      default: 'minor',
      enum: ['minor','major','critical']},
    status: {
      type: String,
      default: 'backlog',
      enum: ['backlog','in progress', 'done']
    },
    date: {
      type: Date,
        format : 'date-time'
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

TaskSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Task', TaskSchema);
