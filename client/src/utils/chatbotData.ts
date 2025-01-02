interface ChatMessage {
    type: 'user' | 'bot';
    content: string;
  }
  
  export const predefinedAnswers: Record<string, string> = {
    'education schemes': 'We have several educational schemes:\n1. National Scholarship Portal\n2. Post-Matric Scholarship\n3. Merit-cum-Means Scholarship',
    'healthcare schemes': 'Available healthcare schemes include:\n1. National Health Protection Scheme\n2. Healthcare Insurance Program\n3. Medical Support Initiative',
    'employment schemes': 'Current employment schemes:\n1. Skills Development Program\n2. Rural Employment Guarantee\n3. Self-Employment Scheme',
    'eligibility criteria': 'Eligibility varies by scheme. Generally, you need:\n- Valid ID proof\n- Income certificate\n- Residence proof\nPlease select a specific scheme for detailed criteria.',
    'application process': 'General application steps:\n1. Select suitable scheme\n2. Gather required documents\n3. Fill online application\n4. Submit and track status',
    'help': 'You can ask about:\n- Education schemes\n- Healthcare schemes\n- Employment schemes\n- Eligibility criteria\n- Application process'
  };
  
  export const getSuggestions = (input: string): string[] => {
    const keywords = Object.keys(predefinedAnswers);
    return keywords.filter(key => 
      key.toLowerCase().includes(input.toLowerCase())
    );
  };
  
  export const getBotResponse = (input: string): string => {
    const normalizedInput = input.toLowerCase();
    
    for (const [key, value] of Object.entries(predefinedAnswers)) {
      if (normalizedInput.includes(key)) {
        return value;
      }
    }
    
    return "I'm not sure about that. Try asking about education schemes, healthcare schemes, employment schemes, eligibility criteria, or the application process. Type 'help' for more options.";
  };