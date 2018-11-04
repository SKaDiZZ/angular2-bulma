import { BuDropdownModule } from './bu-dropdown.module';

describe('BuDropdownModule', () => {
  let buDropdownModule: BuDropdownModule;

  beforeEach(() => {
    buDropdownModule = new BuDropdownModule();
  });

  it('should create an instance', () => {
    expect(buDropdownModule).toBeTruthy();
  });
});
