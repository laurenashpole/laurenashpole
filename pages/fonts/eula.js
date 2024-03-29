import Well from '../../shared/components/Well';
import Layout from '../../components/layout/Layout';

const EULA = () => {
  return(
    <Layout meta={{ title: 'End-User Licensing Agreement - Fonts', pathname: 'fonts/eula' }}>
      <Well>
        <h1>End-User Licensing Agreement</h1>

        <>
          <p><em>Last Updated: December 4, 2010</em></p>

          <p>This is an agreement between you, the purchaser, and Lauren Ashpole, the font creator. In accepting the terms of this agreement, you acknowledge understanding and promise to comply with its terms. If you do not accept the terms please do not complete the purchase transaction.</p>

          <p>What you are purchasing from Lauren Ashpole is the license to use digital typeface software – hereafter “fonts” on a certain number of computers within your organization; you are not purchasing the copyright to the design of the fonts, but the rights to use the fonts. If you are purchasing 1 license, you may use the fonts on a maximum of 5 computers within your organization. You can purchase additional licenses at any time, which grant you the rights to use the fonts on additional computers.</p>

          <p>You can make archival copies of the fonts for your own purposes. A copy of the fonts may be provided to a commercial printer, if necessary. The fonts can be embedded in other software files, such as Portable Document Format (PDF) or Flash files, but you will take all reasonable care to embed the fonts in such a way that they cannot be extracted.</p>

          <p>You may modify the fonts for your own purposes, but the copyright remains with Lauren Ashpole. All terms of the EULA remain in force. You may not sell or give away modified versions of the fonts.</p>

          <p>If you experience any difficulties with the fonts, I will work with you to resolve any technical issues in the fonts. If, after we have worked to resolve any technical issues, you are still not satisfied with the software, I will be pleased to refund your money, which shall be the limit of my liability in this transaction. I grant the rights of use of these fonts to you in good faith, and request that you adhere to the terms of this agreement to the best of your ability, and in good faith.</p>
        </>
      </Well>
    </Layout>
  );
};

export default EULA;