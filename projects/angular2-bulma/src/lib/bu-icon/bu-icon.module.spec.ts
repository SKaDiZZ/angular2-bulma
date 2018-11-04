import { BuIconModule } from './bu-icon.module';

describe('BuIconModule', () => {
  let buIconModule: BuIconModule;

  beforeEach(() => {
    buIconModule = new BuIconModule();
  });

  it('should create an instance', () => {
    expect(buIconModule).toBeTruthy();
  });
});
