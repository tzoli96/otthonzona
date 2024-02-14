function wrapEmail({ content, title }) {
  return `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      <html lang="en">
      
        <head></head>
        <div id="__react-email-preview" style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Csatlakozás ingatlanirodához<div></div>
        </div>
      
        <body style="background-color:#ffffff;margin:0 auto;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif">
          <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%" style="max-width:600px;margin:0 auto">
            <tr style="width:100%">
              <td>
                <table style="margin-top:32px" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td><img alt="Logo" src="https://otthonzona.com/static/media/logo.b2c51e4bb3e6d4a27473.png" width="120" height="50" style="display:block;outline:none;border:none;text-decoration:none" /></td>
                    </tr>
                  </tbody>
                </table>
                <h1 style="color:#1d1c1d;font-size:36px;font-weight:700;margin:30px 0;padding:0;line-height:42px">Csatlakozás ingatlanirodához</h1>
                <p style="font-size:20px;line-height:28px;margin:16px 0;margin-bottom:30px">Kedves felhasználó, az alábbi linkre kattintva tudsz csatlakozni az ingatlanirodához.</p>
                <table style="background:rgb(245, 244, 245);border-radius:4px;margin-right:50px;margin-bottom:30px;padding:43px 23px" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td align="center">
                      <a href="${content}" target="_blank" style="background-color:#F47D07;border-radius:4px;color:#fff;font-size:15px;text-decoration:none;text-align:center;display:inline-block;width:210px;padding:0px 0px;line-height:100%;max-width:100%"><span><!--[if mso]><i style="letter-spacing: undefinedpx;mso-font-width:-100%;mso-text-raise:0" hidden>&nbsp;</i><![endif]--></span><span style="background-color:#F47D07;border-radius:4px;color:#fff;font-size:15px;text-decoration:none;text-align:center;display:inline-block;width:210px;padding:14px 7px;max-width:100%;line-height:120%;text-transform:none;mso-padding-alt:0px;mso-text-raise:0">Csatlakozás</span><span><!--[if mso]><i style="letter-spacing: undefinedpx;mso-font-width:-100%" hidden>&nbsp;</i><![endif]--></span></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p style="font-size:14px;line-height:24px;margin:16px 0;color:#000">Ha nem kértél csatlakozási kérelmet, nincs miért aggódnód - nyugodtan figyelmen kívül hagyhatod.</p>
                <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td>
                        <table width="100%" style="margin-bottom:32px;padding-left:8px;padding-right:8px;width:100%" align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                          <tbody style="width:100%">
                            <tr style="width:100%">
                              <td style="width:66%"><img alt="Logo" src="https://otthonzona.com/static/media/logo.b2c51e4bb3e6d4a27473.png" width="120" height="50" style="display:block;outline:none;border:none;text-decoration:none" /></td>
                              <td>
                                <table width="100%" align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                                  <tbody style="width:100%">
                                    <tr style="width:100%">
                                      <td><a target="_blank" style="color:#067df7;text-decoration:none" href="https://instagram.com/otthonzona"><img alt="Insta" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" width="32" height="32" style="display:inline;outline:none;border:none;text-decoration:none;margin-left:32px" /></a></td>
                                      <td><a target="_blank" style="color:#067df7;text-decoration:none" href="https://www.facebook.com/otthonzona"><img alt="Facebook" src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/slack-facebook.png" width="32" height="32" style="display:inline;outline:none;border:none;text-decoration:none;margin-left:32px" /></a></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td><a target="_blank" style="color:#b7b7b7;text-decoration:underline" href="https://otthonzona.com/otthonzona_aszf.pdf" rel="noopener noreferrer">ÁSZF</a>   |   <a target="_blank" style="color:#b7b7b7;text-decoration:underline" href="https://otthonzona.com/adatkezelesi_tajekoztato.pdf" rel="noopener noreferrer">Adatkezelési tájékoztató</a>   |   <a target="_blank" style="color:#b7b7b7;text-decoration:underline" href="https://otthonzona.com/adatvedelmi_cookie.pdf" rel="noopener noreferrer">Cookie</a>
                        <p style="font-size:12px;line-height:15px;margin:16px 0;color:#b7b7b7;text-align:left;margin-bottom:50px">©2024 Millennium Projekt Management Kft, Otthonzona.com. <br /><br />Minden jog fenntartva.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </table>
        </body>
      
      </html>
        
        `;
}

module.exports = wrapEmail;
