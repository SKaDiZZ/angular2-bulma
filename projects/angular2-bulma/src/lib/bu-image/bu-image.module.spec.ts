import { BuImageModule } from './bu-image.module';

describe('BuImageModule', () => {
  let buImageModule: BuImageModule;

  beforeEach(() => {
    buImageModule = new BuImageModule();
  });

  it('should create an instance', () => {
    expect(buImageModule).toBeTruthy();
  });
});
