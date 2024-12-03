import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10" style={{ backgroundColor: "#07332F", color: "#D3D3D3" }}>
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
            style={{ color: "red" }}
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm2-8V7h-4v5H7v4h3v5h4v-5h3v-4h-3z"></path>
          </svg>
          <p>
            Doctor House Ltd.
            <br />
            Trusted healthcare partner since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title" style={{ color: "#FFFFFF" }}>Doc House Services</h6>
          <a className="link link-hover" style={{ color: "#D3D3D3" }}>General Checkup</a>
          <a className="link link-hover" style={{ color: "#D3D3D3" }}>Pediatrics</a>
          <a className="link link-hover" style={{ color: "#D3D3D3" }}>Cardiology</a>
          <a className="link link-hover" style={{ color: "#D3D3D3" }}>Orthopedics</a>
        </nav>
        <nav>
          <h6 className="footer-title" style={{ color: "#FFFFFF" }}>Quick Links</h6>
          <a className="link link-hover" style={{ color: "#D3D3D3" }}>Home</a>
          <a className="link link-hover" style={{ color: "#D3D3D3" }}>Services</a>
          <a className="link link-hover" style={{ color: "#D3D3D3" }}>About Us</a>
          <a className="link link-hover" style={{ color: "#D3D3D3" }}>Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title" style={{ color: "#FFFFFF" }}>Working Hours</h6>
          <p>Monday - Friday: 9 AM - 8 PM</p>
          <p>Saturday: 10 AM - 5 PM</p>
          <p>Sunday: Closed</p>
        </nav>
        <div className="footer-map">
          <h6 className="footer-title" style={{ color: "#FFFFFF" }}>Location</h6>
          {/* Map centered on Dhaka, Mirpur */}
          <MapContainer
            center={[23.8103, 90.4125]}  // Coordinates for Dhaka, Mirpur
            zoom={13}
            style={{ height: "250px", width: "250px" }}
            className="rounded-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[23.8103, 90.4125]}>
              <Popup>Doctor House Location, Mirpur, Dhaka</Popup>
            </Marker>
          </MapContainer>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
