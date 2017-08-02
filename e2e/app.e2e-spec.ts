import { ProjectIntroPage } from './app.po';

describe('project-intro App', () => {
  let page: ProjectIntroPage;

  beforeEach(() => {
    page = new ProjectIntroPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
