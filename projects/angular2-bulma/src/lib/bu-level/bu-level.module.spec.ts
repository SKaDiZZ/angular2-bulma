import { BuLevelModule } from './bu-level.module';

describe('BuLevelModule', () => {
  let buLevelModule: BuLevelModule;

  beforeEach(() => {
    buLevelModule = new BuLevelModule();
  });

  it('should create an instance', () => {
    expect(buLevelModule).toBeTruthy();
  });
});
