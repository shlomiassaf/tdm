import * as seq from 'sequelize'
import { Prop, targetStore } from '@tdm/core';
import { seqDefaultConfig, ARMixin, SeqResource } from '@tdm/sequelize';

const sequelize = new seq.Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

seqDefaultConfig.sequelize = sequelize;

sequelize
  .authenticate()
  .then(err => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

describe('@tdm/sequqlize', () => {
  it('does nothing', () => {


    class User_  {
      @Prop({})
      firstName: string;

      @Prop({})
      lastName: string;
    }

    @SeqResource({})
    class User extends ARMixin(User_) {

    }

    targetStore.getTargetMeta(User).seqModel.sync()
      .then( () => User.create({ firstName: 'John', lastName: 'Hancock' }) )
      .then( () => {debugger;})
  })
});