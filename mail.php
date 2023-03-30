<?php
    include 'vendor/autoload.php';
    include "configuration.php";

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    // echo json_encode(["response"=>"llego"]);
    // return;
    $data = json_decode(file_get_contents('php://input'), true);
    // $data = ["subject"=>"Subject","to"=>"jtejado@pendulostudios.com","body"=>"This is the body of the Message","file"=>"./Alice_in_Wonderland.pdf"];

    /**
     * Mandar email a un destinatario
     * @param subject : Asunto del correo
     * @param to      : Destinatario del correo
     * @param body    : Cuerpo del mensaje en HTML
     */
    function mailer(string $subject,string $to,string $body, string $file=NULL){
        $mail = new PHPMailer();
        try{
            if ($to==""){
                echo(json_encode(["response"=>'[ERROR] Not to - Mail not sended']));
                return;
            }
            $mail->CharSet = "UTF-8";
            //$mail->SMTPDebug = SMTP::DEBUG_LOWLEVEL;
            $mail->isSMTP();                           // Set mailer to use SMTP
            $mail->Host = Configuration::mailHost;     // Specify main and backup SMTP servers
            $mail->SMTPAuth = true;                    // Enable SMTP authentication
            $mail->SMTPSecure = 'ssl';                 // Enable TLS encryption, `ssl` also accepted
            $mail->Port = Configuration::mailPort;     // TCP port to connect to
            $mail->Username = Configuration::mailUser;
            $mail->Password = Configuration::mailPassword;
            $mail->SMTPAutoTLS=true;
            $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
                )
            );
            
            $mail->setFrom(Configuration::mailUser, 'PenduloTest'); //$GLOBALS["mailuser"], 'PenduloTest');
            $mail->addAddress($to);
            $mail->isHTML(true);  
            $mail->Subject = $subject;
            $mail->MsgHTML($body);
            if (!is_null($file)){
                $mail->addAttachment($file);
            }
            if (!$mail->send()) {
                throw new Exception('Mailer Error: ' . $mail->ErrorInfo);
                if (strlen($GLOBALS["mailpassword"])==0){
                    echo(json_encode(["response"=>'[ERROR] La password correspondiente al mail no existe']));
                }
            } else {
                // DebugWarning('Mail Sended', 'Mail enviado con éxito');
                // echo 'Message sent! <br/>';
            }
        } catch(Exception $e){
            echo($e->getMessage());
            if (strlen(Configuration::mailPassword)==0){//$GLOBALS["mailpassword"])==0){
                echo(json_encode(["response"=>' [ERROR]La contraseña no existe']));
            }else{
                echo(json_encode(["response"=>'[ERROR] Problema de identificación del usuario, puede ser un problema con la cuenta indicada o la contraseña']));
            }
            echo(json_encode(["response"=>'[ERROR] Imposible mandar Mail']));
        }
    }

    if ($data==null){echo json_encode(["response"=>"nullData"]);return;}
    if (key_exists("subject", $data) && key_exists("to", $data) && key_exists("body", $data) && key_exists("file", $data)){
        mailer($data["subject"], $data["to"], $data["body"], $data["file"]);
    }
?>