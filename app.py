import os
import smtplib
from email.mime.text import MIMEText
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def root():
    return jsonify({'message': 'Welcome to the API. Use /send to submit a form.'})

@app.route('/send', methods=['POST'])
def handle_form_submission():
    if request.content_type != 'application/json':
        return jsonify({'error': 'Unsupported Media Type'}), 415
    
    # Get data from the JSON body
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    # Validate form data
    if not name or not email or not message:
        return jsonify({'error': 'All fields are required.'}), 400

    # Send a confirmation email
    try:
        send_confirmation_email(name, email)
        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def send_confirmation_email(name, email):
    try:
        smtp_server = "smtp.gmail.com"
        smtp_port = 465
        sender_email = os.getenv("EMAIL_ADDRESS")
        sender_password = os.getenv("APP_PASSWORD")

        # Create the email content
        subject = "Thank you for contacting us!"
        body = f"Hello {name},\n\nThank you for reaching out. We have received your message and will get back to you shortly.\n\nBest regards,\nAryan"

        msg = MIMEText(body)
        msg['Subject'] = subject
        msg['From'] = sender_email
        msg['To'] = email

        # Use SMTP_SSL for port 465
        with smtplib.SMTP_SSL(smtp_server, smtp_port) as server:
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, email, msg.as_string())
    except Exception as e:
        print(f"Failed to send email: {e}")
        raise

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
