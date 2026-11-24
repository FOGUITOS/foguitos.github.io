// Run node homepage/build.mjs to refresh the generated homepage in dist/index.html.
// A media entry specifies a type (image, video or embed), file and accessible label.
// Place assets under dist/homepage-media. Image includes GIF, video accepts MP4 or
// WebM, and embed points to an HTML viewer. Use null to keep a reserved frame.

export const hero = {
  eyebrow: "VOXEL-BASED MULTIPHYSICS SIMULATION",
  heading: ["From geometry to physics.", "From simulation to design."],
  paragraphs: [
    "FOGUITOS is a voxel-based multiphysics simulation framework designed for power electronics and electronic hardware. It integrates geometry modeling, electrical analysis and thermal simulation within a modular computational framework, enabling engineers to investigate electrical losses, temperature distributions and electro-thermal interactions throughout the hardware design process.",
    "From PCB traces and power semiconductor devices to magnetic components and complete power converters, FOGUITOS provides a unified approach to physics-based modeling and numerical simulation.",
  ],
  mediaLabel: "Simulation view",
  media: null,
};

export const workflow = {
  eyebrow: "MODULAR SIMULATION WORKFLOW",
  heading: "One modular workflow, from geometry to temperature.",
  description: "Import your design, define power losses and thermal boundary conditions, and obtain three-dimensional temperature distributions. Each module can be configured independently or combined into a complete electro-thermal simulation workflow.",
  modules: [
    {
      title: "Geometry & Modeling",
      description: "Import STL geometry exported from CAD and PCB Gerber files to construct three-dimensional voxel-based models. Assign material properties and configure individual components within a modular geometry representation.",
      keywords: ["CAD import (STL)", "Gerber import", "Voxelization", "Material assignment"],
      mediaLabel: "Voxel model",
      media: null,
    },
    {
      title: "Electrical Analysis & Power Losses",
      description: "Define component power dissipation directly or calculate DC resistive losses in PCB traces and winding conductors. Transfer the resulting spatial loss distribution to the thermal model.",
      keywords: ["User-defined power losses", "PCB electrical analysis", "Winding loss modeling", "Joule heating"],
      mediaLabel: "Loss distribution",
      media: null,
    },
    {
      title: "Thermal Boundary Conditions",
      description: "Configure convection coefficients, ambient or reference temperature, and surface boundary conditions. The thermal model accounts for solid conduction and prescribed convection.",
      keywords: ["Convection coefficients", "Ambient temperature", "Cooling conditions", "Thermal radiation (future work)"],
      mediaLabel: "Boundary conditions",
      media: null,
    },
    {
      title: "Thermal Simulation",
      description: "Compute three-dimensional temperature fields under steady-state or time-dependent operating conditions. Visualize temperature evolution, local hotspots and the thermal response of individual components.",
      keywords: ["Steady-state analysis", "Transient analysis", "3D temperature fields", "Hotspot identification"],
      mediaLabel: "Temperature field",
      media: null,
    },
  ],
  summary: "Independent modules. Connected physics. One simulation framework.",
};

export const multiphysics = {
  eyebrow: "UNIFIED MULTIPHYSICS FRAMEWORK",
  heading: "Multiple physics. One numerical framework.",
  description: "Electrical and thermal problems are formulated through a common voxel-based representation and matrix-based numerical framework. Individual physics modules can operate independently or exchange physical quantities for coupled simulations.",
  modules: [
    {
      title: "DC Electrical Analysis",
      description: "Analyze the electrical behavior of conductive structures under DC operating conditions, including voltage distribution, current flow and resistive power losses.",
      capabilities: ["Voltage drop", "Current distribution", "Electrical resistance", "Joule losses"],
      mediaLabel: "Voltage and current fields",
      media: null,
    },
    {
      title: "AC Electrical Analysis",
      status: "In development",
      description: "Research in frequency-dependent electrical modeling focuses on current redistribution and AC losses in conductive structures.",
      capabilities: ["Frequency-dependent impedance", "Skin effect", "Proximity effect", "AC conductor losses"],
      mediaLabel: "AC current distribution",
      media: null,
    },
    {
      title: "Transient Thermal Analysis",
      description: "Compute the evolution of three-dimensional temperature fields for time-varying power dissipation and specified thermal boundary conditions.",
      capabilities: ["Time-dependent power profiles", "Transient temperature fields", "Explicit and implicit time integration", "Thermal response and hotspot evolution"],
      mediaLabel: "Transient temperature field",
      media: null,
    },
    {
      title: "Steady-State Thermal Analysis",
      description: "Calculate equilibrium temperature distributions for specified power losses and thermal boundary conditions.",
      capabilities: ["Three-dimensional temperature distribution", "Thermal equilibrium", "Hotspot identification", "Temperature gradients"],
      mediaLabel: "Steady-state temperature field",
      media: null,
    },
  ],
};

export const numerical = {
  eyebrow: "THE NUMERICAL FOUNDATION",
  heading: "A common numerical foundation for different physics.",
  paragraphs: [
    "FOGUITOS represents physical domains through a common voxel-based discretization. Local physical interactions are assembled into matrix systems, providing a consistent numerical structure for electrical and thermal analysis.",
    "This modular formulation allows individual solvers to share geometric representations, material information and physical quantities, supporting electro-thermal coupling and efficient numerical computation.",
  ],
  principles: [
    {
      title: "Shared Representation",
      description: "A common voxel-based representation for geometry, materials and physical interactions.",
    },
    {
      title: "Modular Solvers",
      description: "Independent electrical and thermal solvers with consistent numerical interfaces.",
    },
    {
      title: "Coupled Physics",
      description: "Electrical losses can be transferred to the thermal solver. Compatible DC workflows can recalculate those losses using temperature-dependent conductor resistivity.",
    },
  ],
};

// To publish a feature, add its description and media and set visible to true.
// caption and documentationHref are optional.
export const showcase = {
  heading: "Explore FOGUITOS in action.",
  mediaLabel: "Software feature view",
  features: [
    { title: "CAD and voxel modeling", visible: false },
    { title: "PCB modeling from Gerber files", visible: false },
    { title: "Electrical analysis and loss distribution", visible: false },
    { title: "Thermal boundary condition configuration", visible: false },
    { title: "Transient thermal simulation", visible: false },
    { title: "Steady-state temperature visualization", visible: false },
    { title: "Modular modeling and multiphysics coupling", visible: false },
    { title: "CPU and GPU computing", visible: false },
  ],
};
