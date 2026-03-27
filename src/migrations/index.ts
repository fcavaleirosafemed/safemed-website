import * as migration_20260327_150518 from './20260327_150518';

export const migrations = [
  {
    up: migration_20260327_150518.up,
    down: migration_20260327_150518.down,
    name: '20260327_150518'
  },
];
