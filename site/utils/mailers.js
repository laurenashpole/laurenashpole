import nodemailer from 'nodemailer';

export function getTransporter() {
  return nodemailer.createTransport({
    host: 'mail.smtp2go.com',
    port: 2525,
    auth: {
      user: process.env.SMTP2GO_USERNAME,
      pass: process.env.SMTP2GO_PASSWORD,
    },
  });
}

export function getOrderTemplate(order) {
  return `
    <!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
        <!--[if gte mso 15]>
          <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
        <![endif]-->
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Thank you for your purchase!</title>

        <style type="text/css">
          .mcnPreviewText{
            display:none !important;
          }
          #outlook a{
            padding:0;
          }
          a[x-apple-data-detectors]{
            color:inherit !important;
            text-decoration:none !important;
            font-size:inherit !important;
            font-family:inherit !important;
            font-weight:inherit !important;
            line-height:inherit !important;
          }
          .templateContainer{
            max-width:600px !important;
          }
          .mcnRetinaImage{
            vertical-align:bottom;
          }
          .gmailfix {
            display: none;
            display: none !important;
          }
          @media only screen and (min-width:768px){
            .templateContainer{
              width:600px !important;
            }
          } @media only screen and (max-width: 480px){
            body,table,td,p,a,li,blockquote{
              -webkit-text-size-adjust:none !important;
            }
          } @media only screen and (max-width: 480px){
            body{
              width:100% !important;
              min-width:100% !important;
            }
          } @media only screen and (max-width: 480px){
            .mcnRetinaImage{
              max-width:100% !important;
            }
          } @media only screen and (max-width: 480px){
            h1{
              font-size:30px !important;
              line-height:125% !important;
            }
          }
        </style>
      </head>
      <body style="height: 100%;margin: 0;padding: 0;width: 100%;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
        <!--[if !gte mso 9]><!----><span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">Happy designing!</span><!--<![endif]-->
        <center>
          <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height: 100%;margin: 0;padding: 0;width: 100%;">
            <!-- BEGIN HEADER // -->
            <tr>
              <td align="center" valign="top" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height: 100%;margin: 0;padding: 0;width: 100%;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                  <tr>
                    <td align="center" valign="top" style="background:#f7f7f7 none no-repeat 50% 50%/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #f7f7f7;background-image: url('https://mcusercontent.com/5e9c643a20b49926773037101/images/809a289d-2f2b-18be-b812-445dd070f8b6.png');background-repeat: no-repeat;background-position: 60% bottom;background-size: 250px auto;border-top: 0;border-bottom: 0;padding-top: 30px;padding-bottom: 30px;">
                      <!--[if (gte mso 9)|(IE)]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                        <tr>
                        <td align="center" valign="top" width="600" style="width:600px;">
                      <![endif]-->
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;max-width: 600px !important;">
                        <tr>
                          <td align="center" valign="top" style="background:transparent none no-repeat center/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: transparent;background-image: none;background-repeat: no-repeat;background-position: center;background-size: cover;border-top: 0;border-bottom: 0;padding-top: 0;padding-bottom: 0;padding-left: 18px;padding-right: 18px;">
                            <a href="https://www.laurenashpole.com" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                              <img align="center" alt="Lauren Ashpole" src="https://gallery.mailchimp.com/5e9c643a20b49926773037101/images/064bcff6-3610-428a-ac9b-a2a663ec2be8.png" width="75" style="max-width: 150px;padding-bottom: 0;display: inline !important;vertical-align: bottom;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;border-radius: 6px;" class="mcnRetinaImage">
                            </a>
                          </td>
                        </tr>
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                        </td>
                        </tr>
                        </table>
                      <![endif]-->
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- BEGIN BODY // -->
            <tr>
              <td align="center" valign="top" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height: 100%;margin: 0;padding: 0;width: 100%;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                  <tr>
                    <td align="center" valign="top" style="background:#f7f7f7 none no-repeat 50% 50%/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #f7f7f7;background-image: none;background-repeat: no-repeat;background-position: 50% 50%;background-size: cover;border-top: 0;border-bottom: 0;padding-left: 10px;padding-right: 10px;">
                      <!--[if (gte mso 9)|(IE)]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                        <tr>
                        <td align="center" valign="top" width="600" style="width:600px;">
                      <![endif]-->
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;max-width: 600px !important;">
                        <tr>
                          <td align="center" valign="top" style="background:#ffffff none no-repeat 50% 50%/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #ffffff;background-image: none;background-repeat: no-repeat;background-position: 50% 50%;background-size: cover;border-top: 0;border-bottom: 0;border-radius: 6px 6px 0 0;padding-top: 30px;padding-bottom: 20px;padding-left: 18px;padding-right: 18px;">
                            <h1 style="display: block;margin: 0;padding: 0;color: #222222;font-family: Helvetica;font-size: 40px;font-style: normal;font-weight: bold;line-height: 150%;letter-spacing: normal;text-align: center;"><span style="font-family:helvetica neue,helvetica,arial,verdana,sans-serif">Thank you for your order!</span></h1>
                            <p style="text-align: center;margin: 10px 0;padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #757575;font-family: Helvetica;font-size: 16px;line-height: 150%;"><br>Your purchase was processed via PayPal with the order number ${order.orderId} and included the following fonts:<br><br></p>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;max-width: 564px !important;">
                              ${order.items
    .map((item, i) => {
      return `
                                  <tr style="border-bottom: 1px solid #e7e7e7;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #757575;font-family: Helvetica;font-size: 16px;line-height: 150%;${i === 0 ? 'border-top: 1px solid #e7e7e7;' : ''}">
                                    <td align="left" style="padding-top:10px; padding-bottom: 10px;">
                                      ${item.name}
                                    </td>
                                    <td align="right" style="padding-top:10px; padding-bottom: 10px;">
                                      ${item.quantity} x $${parseInt(item.unit_amount.value)}
                                    </td>
                                  </tr>
                                `;
    })
    .join('')}
                            </table>
                            <p style="text-align: center;margin: 10px 0;padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #757575;font-family: Helvetica;font-size: 16px;line-height: 150%;"><br>Don't forget to download your commercial zip file${order.fonts.length === 1 ? '' : 's'} if you're looking for web fonts or additional characters (if applicable). ${order.fonts.length === 1 ? 'It' : 'They'} should be attached to this email but if you don't see anything, or you run into any other issues, feel free to reply with any questions.
                              <br><br>Thanks again and happy designing!
                            </p>
                          </td>
                        </tr>
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                        </td>
                        </tr>
                        </table>
                      <![endif]-->
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- BEGIN PRE-FOOTER // -->
            <tr>
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                  <tbody><tr>
                    <td align="center" valign="top" style="background:#685f77 none no-repeat 50% 50%/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #685f77;background-image: none;background-repeat: no-repeat;background-position: 50% 50%;background-size: cover;border-top: 0;border-bottom: 0;padding-left: 10px;padding-right: 10px;">
                      <!--[if (gte mso 9)|(IE)]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                        <tr>
                        <td align="center" valign="top" width="600" style="width:600px;">
                      <![endif]-->
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;max-width: 600px !important;">
                        <tbody><tr>
                          <td align="center" valign="top" style="background:#ffffff none no-repeat 50% 50%/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #ffffff;background-image: none;background-repeat: no-repeat;background-position: 50% 50%;background-size: cover;border-top: 0;border-bottom: 0;border-radius: 0 0 6px 6px;padding-bottom: 20px;">
                            &nbsp;
                          </td>
                        </tr>
                      </tbody></table>
                      <!--[if (gte mso 9)|(IE)]>
                        </td>
                        </tr>
                        </table>
                      <![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </tr>
            <!-- BEGIN FOOTER // -->
            <tr>
              <td align="center" valign="top" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height: 100%;margin: 0;padding: 0;width: 100%;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                  <tr>
                    <td align="center" valign="top" style="background:#685f77 none no-repeat 50% 50%/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #685f77;background-image: none;background-repeat: no-repeat;background-position: 50% 50%;background-size: cover;border-top: 0;border-bottom: 0;padding-top: 35px;padding-bottom: 63px;">
                      <!--[if (gte mso 9)|(IE)]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                        <tr>
                        <td align="center" valign="top" width="600" style="width:600px;">
                      <![endif]-->
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;max-width: 600px !important;">
                        <tr>
                          <td align="center" valign="top" style="background:transparent none no-repeat center/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: transparent;background-image: none;background-repeat: no-repeat;background-position: center;background-size: cover;border-top: 0;border-bottom: 0;padding-top: 9px;padding-bottom: 9px;padding-left: 18px;padding-right: 18px;">
                            <table align="center" border="0" cellpadding="18" cellspacing="0" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                              <tbody>
                                <tr>
                                  <td align="center" valign="middle" width="24" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    <a href="https://www.laurenashpole.com" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/light-link-48.png" style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" height="24" width="24" alt="laurenashpole.com"></a>
                                  </td>
                                  <td align="center" valign="middle" width="24" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    <a href="http://www.twitter.com/laurenashpole" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/light-twitter-48.png" style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" height="24" width="24" alt="Twitter"></a>
                                  </td>
                                  <td align="center" valign="middle" width="24" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    <a href="http://www.pinterest.com/laurenashpole" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/light-pinterest-48.png" style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" height="24" width="24" alt="Pinterest"></a>
                                  </td>
                                  <td align="center" valign="middle" width="24" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    <a href="https://github.com/laurenashpole" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/light-github-48.png" style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" height="24" width="24" alt="Github"></a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="top" style="background:transparent none no-repeat center/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: transparent;background-image: none;background-repeat: no-repeat;background-position: center;background-size: cover;border-top: 0;border-bottom: 0;padding-top: 18px;padding-bottom: 18px;padding-left: 18px;padding-right: 18px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;border-top: 1px solid #ffffff;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                              <tbody>
                                <tr>
                                  <td style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    <span></span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td valign="top" style="padding-top: 18px;padding-right: 36px;padding-bottom: 9px;padding-left: 36px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #ffffff;font-family: Helvetica;font-size: 12px;line-height: 150%;text-align: center;">
                            <span style="font-family:helvetica neue,helvetica,arial,verdana,sans-serif">If it's not too presumptuous, I've added you to my mailing list. I only send emails when I have something new to download, but <a href="https://laurenashpole.us4.list-manage.com/unsubscribe?u=5e9c643a20b49926773037101&id=a878f779fc" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #ffffff;font-weight: normal;text-decoration: underline;">click here to unsubscribe</a> if you'd prefer not to receive them.</span>
                          </td>
                        </tr>
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                        </td>
                        </tr>
                        </table>
                      <![endif]-->
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </center>
        <div class="gmailfix" style="white-space:nowrap; font:15px courier; line-height:0;">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
      </body>
    </html>
  `;
}
