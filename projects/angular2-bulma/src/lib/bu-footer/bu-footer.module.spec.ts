import { BuFooterModule } from './bu-footer.module';

describe('BuFooterModule', () => {
  let buFooterModule: BuFooterModule;

  beforeEach(() => {
    buFooterModule = new BuFooterModule();
  });

  it('should create an instance', () => {
    expect(buFooterModule).toBeTruthy();
  });
});
