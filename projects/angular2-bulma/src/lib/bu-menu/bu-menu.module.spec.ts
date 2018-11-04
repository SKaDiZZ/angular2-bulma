import { BuMenuModule } from './bu-menu.module';

describe('BuMenuModule', () => {
  let buMenuModule: BuMenuModule;

  beforeEach(() => {
    buMenuModule = new BuMenuModule();
  });

  it('should create an instance', () => {
    expect(buMenuModule).toBeTruthy();
  });
});
