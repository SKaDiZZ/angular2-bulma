import { BuBoxModule } from './bu-box.module';

describe('BuBoxModule', () => {
  let buBoxModule: BuBoxModule;

  beforeEach(() => {
    buBoxModule = new BuBoxModule();
  });

  it('should create an instance', () => {
    expect(buBoxModule).toBeTruthy();
  });
});
