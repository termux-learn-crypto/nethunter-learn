const quizData = {
  'aircrack-ng': [
    {
      question: 'Monitor mode enable karne ke liye kaunsa command use hota hai?',
      options: ['airmon-ng start wlan0', 'airodump-ng wlan0', 'aireplay-ng wlan0', 'aircrack-ng wlan0'],
      correct: 0,
      explanation: 'airmon-ng start wlan0 se wireless card monitor mode me aata hai.'
    },
    {
      question: 'WPA2 handshake capture karne ke liye kaunsa tool use hota hai?',
      options: ['aircrack-ng', 'airodump-ng', 'aireplay-ng', 'airdecap-ng'],
      correct: 1,
      explanation: 'airodump-ng packets capture karta hai jisme handshake bhi shamil hota hai.'
    },
    {
      question: 'aireplay-ng ka kya kaam hai?',
      options: ['Password crack karna', 'Packets inject karna', 'Network scan karna', 'Handshake capture karna'],
      correct: 1,
      explanation: 'aireplay-ng packets inject karta hai jaise deauthentication attacks.'
    },
    {
      question: 'Kaunsa protocol sabse weak hai WiFi security me?',
      options: ['WPA3', 'WPA2', 'WEP', 'WPA'],
      correct: 2,
      explanation: 'WEP sabse purana aur weak protocol hai jo easily crack ho jata hai.'
    },
    {
      question: 'IV (Initialization Vector) kya hai?',
      options: ['Password key', 'Encryption vector', 'Random value for encryption', 'Network name'],
      correct: 2,
      explanation: 'IV ek random value hai jo encryption me use hota hai aur WEP me weak hota hai.'
    }
  ],
  'nmap': [
    {
      question: 'SYN scan karne ke liye kaunsa flag use hota hai?',
      options: ['-sT', '-sS', '-sU', '-sV'],
      correct: 1,
      explanation: '-sS SYN scan hai jo stealthy aur fast hota hai.'
    },
    {
      question: 'Service version detect karne ke liye kaunsa flag?',
      options: ['-sV', '-O', '-A', '-sS'],
      correct: 0,
      explanation: '-sV flag service version detection karta hai.'
    },
    {
      question: 'UDP scan karne ke liye kaunsa flag?',
      options: ['-sT', '-sS', '-sU', '-sV'],
      correct: 2,
      explanation: '-sU UDP scan karta hai jo UDP ports check karta hai.'
    },
    {
      question: 'OS detection ke liye kaunsa flag?',
      options: ['-sV', '-O', '-A', '-sS'],
      correct: 1,
      explanation: '-O flag OS detection karta hai.'
    },
    {
      question: 'Aggressive scan ke liye kaunsa flag?',
      options: ['-sV', '-O', '-A', '-sS'],
      correct: 2,
      explanation: '-A aggressive scan hai jo OS detection, version detection, scripts aur traceroute sab karta hai.'
    }
  ],
  'metasploit-framework': [
    {
      question: 'Metasploit me exploit run karne se pehle kya set karna zaroori hai?',
      options: ['Payload', 'Exploit', 'Target', 'Session'],
      correct: 0,
      explanation: 'Exploit run karne se pehle payload set karna zaroori hai jo target par execute hoga.'
    },
    {
      question: 'Meterpreter me file download karne ka command?',
      options: ['download', 'get', 'pull', 'grab'],
      correct: 0,
      explanation: 'Meterpreter me "download" command se file download hoti hai.'
    },
    {
      question: 'Reverse shell kya hai?',
      options: ['Target se attacker ko connection', 'Attacker se target ko connection', 'Dono taraf connection', 'Koi connection nahi'],
      correct: 0,
      explanation: 'Reverse shell me target machine attacker ko connection bhejta hai.'
    },
    {
      question: 'MSF console me search karne ka command?',
      options: ['find', 'search', 'locate', 'look'],
      correct: 1,
      explanation: 'MSF console me "search" command se exploits aur modules search hote hain.'
    },
    {
      question: 'Persistent session ke liye kya use hota hai?',
      options: ['Background', 'Migrate', 'Persistence', 'Auto-run'],
      correct: 1,
      explanation: 'Process migration se session stable aur persistent rehta hai.'
    }
  ],
  'sqlmap': [
    {
      question: 'SQL injection detect karne ke liye kaunsa tool best hai?',
      options: ['Nmap', 'SQLMap', 'Hydra', 'Burpsuite'],
      correct: 1,
      explanation: 'SQLMap automated SQL injection detection aur exploitation tool hai.'
    },
    {
      question: 'Database dump karne ka SQLMap command?',
      options: ['sqlmap -u URL --dump', 'sqlmap -u URL --dbs', 'sqlmap -u URL --tables', 'sqlmap -u URL --columns'],
      correct: 0,
      explanation: '--dump flag database ka data dump karta hai.'
    },
    {
      question: 'SQLMap me tamper scripts ka kya kaam hai?',
      options: ['Speed badhana', 'WAF bypass karna', 'Password crack karna', 'Scan karna'],
      correct: 1,
      explanation: 'Tamper scripts WAF (Web Application Firewall) ko bypass karne ke liye use hote hain.'
    },
    {
      question: 'POST request ke liye SQLMap me kya use hota hai?',
      options: ['--data', '--post', '--method', '--request'],
      correct: 0,
      explanation: '--data flag POST data specify karta hai.'
    },
    {
      question: 'SQLMap me risk level badhane ka kya effect hota hai?',
      options: ['Speed badhta hai', 'Zyada tests hote hain', 'Kam tests hote hain', 'Koi effect nahi'],
      correct: 1,
      explanation: 'Risk level badhane se zyada intrusive tests hote hain jo zyada detect bhi ho sakte hain.'
    }
  ],
  'hydra': [
    {
      question: 'Brute force attack kya hai?',
      options: ['SQL injection', 'Sab combinations try karna', 'XSS attack', 'DDoS attack'],
      correct: 1,
      explanation: 'Brute force me sab possible password combinations try kiye jaate hain.'
    },
    {
      question: 'Wordlist attack kya hai?',
      options: ['Random passwords', 'Dictionary se passwords try karna', 'SQL injection', 'Network scan'],
      correct: 1,
      explanation: 'Wordlist attack me ek dictionary file ke passwords try kiye jaate hain.'
    },
    {
      question: 'Hydra me SSH brute force ke liye command?',
      options: ['hydra -l user -P wordlist.txt ssh://target', 'hydra -u user -p pass ssh://target', 'hydra --ssh user target', 'hydra -ssh -l user target'],
      correct: 0,
      explanation: 'hydra -l user -P wordlist.txt ssh://target se SSH brute force hota hai.'
    },
    {
      question: 'Parallel connections badhane ka kya fayda hai?',
      options: ['Security badhti hai', 'Speed badhti hai', 'Accuracy badhti hai', 'Koi fayda nahi'],
      correct: 1,
      explanation: 'Parallel connections se speed badhti hai lekin detect hone ka risk bhi badhta hai.'
    },
    {
      question: 'Hydra me -t flag ka kya matlab hai?',
      options: ['Target', 'Threads', 'Time', 'Type'],
      correct: 1,
      explanation: '-t flag threads (parallel connections) set karta hai.'
    }
  ]
}

export default quizData
