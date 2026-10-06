import Typewriter from 'typewriter-effect';

function EfeitoEscrita() {
  return (
    <h1>
      <Typewriter
        options={{
          strings: ['Software Enginner', 'Cyber Security'],
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
  );
}

export default EfeitoEscrita;