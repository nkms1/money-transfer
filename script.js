const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", 
    "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", 
    "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", 
    "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
    "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the", 
    "Congo, Republic of the", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", 
    "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", 
    "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", 
    "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", 
    "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", 
    "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
    "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", 
    "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", 
    "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
    "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", 
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
    "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", 
    "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", 
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", 
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", 
    "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", 
    "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", 
    "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", 
    "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", 
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];
const carriers = [
    "AT&T", "Verizon", "T-Mobile", "Sprint", "Vodafone", "Orange", "Telefonica", "China Mobile", 
    "China Unicom", "Reliance Jio", "Airtel", "MTN", "Telstra", "O2", "BT Mobile", "Deutsche Telekom"
];
document.addEventListener('DOMContentLoaded', () => {
    const senderCountrySelect = document.getElementById('senderCountry');
    const recipientCountrySelect = document.getElementById('recipientCountry');
    const senderCarrierSelect = document.getElementById('senderCarrier');
    const recipientCarrierSelect = document.getElementById('recipientCarrier');

    countries.forEach(country => {
        let option = new 
        Option(country, country);     
        senderCountrySelect.add(option.cloneNode(true));
        recipientCountrySelect.add(option.cloneNode(true))
    });
    carriers.forEach(carrier =>{
        let option = new
        option(carrier,carrier);
        senderCarrierSelect.add(option.cloneNode(true));
        recipientCarrierSelect.add(option.cloneNode(true));
    });
    });
    document.getElementById('transferForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const sender = document.getElementById('sender').value;
        const senderPhone = document.getElementById('senderPhone').value;
        const senderCarrier = document.getElementById('senderCarrier').value;
        const senderCountry = document.getElementById('senderCountry').value;
        const recipient = document.getElementById('recipient').value;
        const recipientPhone = document.getElementById('recipientPhone').value;
        const recipientCarrier = document.getElementById('recipientCarrier').value;
        const recipientCountry = document.getElementById('recipientCountry').value;
        const amount = document.getElementById('amount').value;
        const message = document.getElementById('message');
    
        if (sender && senderPhone && senderCarrier && senderCountry && recipient && recipientPhone && recipientCarrier && recipientCountry && amount) {
            // Simulate a successful transfer
            message.textContent = `Successfully transferred $${amount} from ${sender} (${senderPhone}, ${senderCarrier}, ${senderCountry}) to ${recipient} (${recipientPhone}, ${recipientCarrier}, ${recipientCountry}).`;
            message.style.color = 'green';
    
            // Reset the form
            document.getElementById('transferForm').reset();
        } else {
            message.textContent = 'Please fill out all fields.';
            message.style.color = 'red';
        }
    });
    
    