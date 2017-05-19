import { Sequelize } from 'sequelize';

import { BaseSeqConfig } from "./core/interfaces";

export class SeqDefaultConfig implements BaseSeqConfig {
  sequelize?: Sequelize;
}

export const seqDefaultConfig: SeqDefaultConfig = new SeqDefaultConfig();
