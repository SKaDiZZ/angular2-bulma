import { BuTagModule } from './bu-tag.module';

describe('BuTagModule', () => {
  let buTagModule: BuTagModule;

  beforeEach(() => {
    buTagModule = new BuTagModule();
  });

  it('should create an instance', () => {
    expect(buTagModule).toBeTruthy();
  });
});
