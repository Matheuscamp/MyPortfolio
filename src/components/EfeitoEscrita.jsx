import Typewriter from 'typewriter-effect';

function EfeitoEscrita() {
  return (
    <h1>
      <Typewriter
        options={{
          strings: ['Software Engineer', 'Cyber Security'],
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
  );
}

export default EfeitoEscrita;