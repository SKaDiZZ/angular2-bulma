import { BuTileModule } from './bu-tile.module';

describe('BuTileModule', () => {
  let buTileModule: BuTileModule;

  beforeEach(() => {
    buTileModule = new BuTileModule();
  });

  it('should create an instance', () => {
    expect(buTileModule).toBeTruthy();
  });
});
