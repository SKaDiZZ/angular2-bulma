import { BuSectionModule } from './bu-section.module';

describe('BuSectionModule', () => {
  let buSectionModule: BuSectionModule;

  beforeEach(() => {
    buSectionModule = new BuSectionModule();
  });

  it('should create an instance', () => {
    expect(buSectionModule).toBeTruthy();
  });
});
