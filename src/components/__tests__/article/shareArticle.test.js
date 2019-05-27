import SocialShare from '../../SocialShare';

it('Render <Social /> component when the article has been rendered on <ViewArticle /> component', () => {
    const socialShare = render(<SocialShare/>);
    expect(socialShare).toBeTruthy();
    expect(socialShare).toMatchSnapshot();
  });