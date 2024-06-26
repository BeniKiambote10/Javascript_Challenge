// HARD:
// Inside a closure, create an object called PII (Personally Identifiable Information)that cannot be accessed directly. 
// The object should have at least two properties: name and SSN. Only the name property should be accessible, 
// and it should be called through a public function. The SSN property should not be accessible at all. 
// Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't 
// see important info like social security numbers from getting access to the data. You can use 'getName' 
// or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, 
// but they definitely shouldn't have access to their SSN.


function patientInfo (name, ssn){
  const PII = {
    name: name,
    ssn: ssn
  };

  function getName(){
    return PII.name;

  };

  function getSsn(){
    return PII.ssn;
  };

//return only the public function accesible 
  return {
      getName,
      getSsn
  };
}
  
const patient = patientInfo("Beni", "123-45-678")
  
console.log(patient.name);
console.log(patient.ssn);
console.log(patient.getName());
console.log(patient.getSsn());
