import { BuProgressModule } from './bu-progress.module';

describe('BuProgressModule', () => {
  let buProgressModule: BuProgressModule;

  beforeEach(() => {
    buProgressModule = new BuProgressModule();
  });

  it('should create an instance', () => {
    expect(buProgressModule).toBeTruthy();
  });
});
