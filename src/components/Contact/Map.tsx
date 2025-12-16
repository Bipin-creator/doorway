const Map = () => {
  return (
    <div className="w-full h-[350px] md:h-[450px] overflow-hidden my-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27049.40736072112!2d85.29272719806764!3d27.686894999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8b109d1bb1d1c18b%3A0x2178933735d1e72d!2sThe%20Doorway!5e0!3m2!1sen!2snp!4v1764910403808!5m2!1sen!2snp"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        
        referrerPolicy="no-referrer-when-downgrade"
        className="grayscale opacity-90"
      ></iframe>
    </div>
  );
};

export default Map;
