import type { NoteDraft } from "./types";

/** Full teaching notes for 9700 Topic 9 — subtopic 9.1 (see lib/notes/AUTHORING.md). */
export const BIOLOGY_TOPIC9_DRAFTS: Record<string, NoteDraft> = {
  "t9-1": {
    noteId: "t9-1",
    syllabusNotes: [
      {
        id: "gas-exchange-organisation",
        title: "Organisation of the mammalian gas exchange system",
        paragraphs: [
          "The mammalian gas exchange system is specialised to exchange oxygen and carbon dioxide rapidly between air and blood. The pathway for air is: trachea -> bronchi -> bronchioles -> alveoli. Around the alveoli is a dense capillary network supplied by the pulmonary circulation.",
          "Each alveolus is a small air sac with a very thin wall and a large total surface area when all alveoli are considered together. This creates an efficient interface for diffusion between alveolar air and blood in capillaries.",
          "At the tissue level, the system is often described as conducting zones (trachea, bronchi, bronchioles) and exchange zones (alveoli with capillaries). Conducting passages deliver, filter and condition air; exchange surfaces provide the short diffusion distance needed for rapid gas transfer.",
        ],
      },
      {
        id: "airway-tissue-specialisations",
        title: "Roles of cartilage, cilia, goblet cells, smooth muscle and elastic fibres",
        paragraphs: [
          "Trachea and bronchi contain cartilage that helps prevent airway collapse when pressure changes during breathing. In bronchi, cartilage is present as irregular plates; in the trachea, rings or C-shaped supports keep the lumen open while allowing some flexibility.",
          "The lining epithelium in larger airways is ciliated and contains goblet cells. Goblet cells secrete mucus that traps dust particles and microorganisms. Coordinated ciliary beating moves this mucus toward the throat, where it can be swallowed. This mucociliary escalator reduces infection risk and protects delicate alveolar surfaces.",
          "Smooth muscle in airway walls can alter airway diameter by contraction and relaxation, changing resistance to airflow. Elastic fibres in lungs and airway tissue allow stretch during inspiration and recoil during expiration. Elastic recoil is especially important for passive expiration.",
        ],
      },
      {
        id: "ventilation-mechanics",
        title: "Ventilation: pressure-volume changes in inspiration and expiration",
        paragraphs: [
          "Ventilation is movement of air into and out of the lungs caused by pressure differences between alveoli and atmosphere. Air flows down a pressure gradient: from higher pressure to lower pressure.",
          "During inspiration at rest, external intercostal muscles contract and lift ribs up and out, and the diaphragm contracts and flattens. Thoracic volume increases, intrapulmonary (alveolar) pressure falls below atmospheric pressure, and air enters the lungs.",
          "During expiration at rest, external intercostal muscles and diaphragm relax. Elastic recoil of lung tissue and thoracic structures reduces thoracic volume, intrapulmonary pressure rises above atmospheric pressure, and air leaves.",
          "In forced expiration, internal intercostal and abdominal muscles contract, producing a larger rise in pressure and faster outward airflow. In forced inspiration, accessory muscles can further increase thoracic expansion.",
        ],
      },
      {
        id: "alveolar-gas-exchange",
        title: "How alveoli are adapted for diffusion and how gradients are maintained",
        paragraphs: [
          "Gas exchange at alveoli occurs by diffusion down partial pressure gradients. Oxygen diffuses from alveolar air (higher partial pressure of oxygen) into blood, while carbon dioxide diffuses from blood (higher partial pressure of carbon dioxide) into alveolar air.",
          "Efficient diffusion depends on Fick's law factors: large surface area (many alveoli), short diffusion distance (thin alveolar epithelium and capillary endothelium), and steep concentration/partial pressure gradients maintained by continuous ventilation and blood flow.",
          "Alveolar walls are moist, so gases dissolve before diffusing across cell membranes. A rich capillary network and rapid blood flow continually bring deoxygenated blood and remove oxygenated blood, helping maintain gradient steepness.",
        ],
      },
      {
        id: "effects-of-smoking",
        title: "Effects of smoking on the gas exchange system",
        paragraphs: [
          "Smoking introduces harmful substances including tar, carbon monoxide, irritants and carcinogens. These substances impair airway defence, reduce oxygen transport efficiency, and damage gas-exchange surfaces.",
          "Irritants stimulate increased mucus production and damage cilia, reducing mucus clearance. Mucus accumulation and infection risk increase, contributing to chronic bronchitis, where bronchi are inflamed and narrowed. Airflow resistance rises and ventilation becomes less efficient.",
          "In emphysema, alveolar walls are progressively destroyed and elastic tissue is lost. This reduces surface area for diffusion and decreases elastic recoil, making expiration difficult and trapping air in lungs.",
          "Carcinogens in smoke increase the risk of lung cancer by causing mutations in airway epithelial cells. Carbon monoxide also forms stable carboxyhaemoglobin, reducing oxygen-carrying capacity of blood and worsening tissue oxygen supply.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners reward mechanistic explanations that link structure to function and pressure gradients to airflow. Marks are commonly lost when candidates list terms without causal links.",
      items: [
        "Stating that oxygen is 'pumped' into blood; oxygen enters blood by diffusion down a partial pressure gradient.",
        "Confusing ventilation with gas exchange. Ventilation is bulk air movement; gas exchange is diffusion across alveolar-capillary surfaces.",
        "Describing inspiration or expiration with incorrect muscle actions (for example saying diaphragm contracts during expiration at rest).",
        "Ignoring elastic recoil in expiration and over-attributing expiration to active muscle contraction at rest.",
        "Saying smoking only causes cancer and omitting chronic bronchitis or emphysema mechanisms linked to cilia, mucus and alveolar damage.",
      ],
    },
    workedExamples: [
      {
        id: "t9-1-ex1",
        title: "Linking airway structure to function in a short-answer response",
        problem: [
          "Explain how cartilage, ciliated epithelium and goblet cells in the mammalian airway contribute to effective gas exchange.",
        ],
        solution: [
          "Cartilage in trachea and bronchi helps keep airways open and reduces collapse when pressure changes during breathing, so airflow reaches the alveoli reliably.",
          "Goblet cells secrete mucus that traps dust and microorganisms before they can reach delicate gas-exchange surfaces.",
          "Cilia beat to move mucus toward the throat, removing trapped particles and reducing infection risk. Together these features maintain clear, patent airways so ventilation can support efficient alveolar diffusion.",
        ],
      },
      {
        id: "t9-1-ex2",
        title: "Explaining pressure changes in one breathing cycle",
        problem: [
          "A candidate writes: 'Air enters the lungs because the diaphragm contracts and pushes air in.' Rewrite this as an exam-quality explanation of inspiration and expiration.",
        ],
        solution: [
          "During inspiration, diaphragm contraction flattens the diaphragm and external intercostals lift ribs up and out, increasing thoracic volume.",
          "This increase in volume lowers intrapulmonary pressure below atmospheric pressure, so air flows into the lungs down the pressure gradient.",
          "During expiration at rest, these muscles relax and elastic recoil reduces thoracic volume, raising intrapulmonary pressure above atmospheric pressure so air flows out.",
          "Therefore muscles change thoracic volume and pressure; they do not directly push air into the lungs.",
        ],
      },
      {
        id: "t9-1-ex3",
        title: "Applying smoking pathology to gas-exchange efficiency",
        problem: [
          "Explain why a long-term smoker with emphysema becomes breathless during exercise, even if ventilation rate increases.",
        ],
        solution: [
          "In emphysema, alveolar walls are destroyed so total surface area for diffusion is reduced, lowering maximum oxygen uptake from alveoli to blood.",
          "Loss of elastic tissue reduces recoil, making expiration less effective and causing air trapping; this can reduce effective ventilation of fresh alveolar air.",
          "During exercise, oxygen demand rises but diffusion capacity is limited by reduced area and impaired airflow dynamics, so blood oxygenation may not keep pace with demand, causing breathlessness.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t9-1-st1",
        question:
          "Outline the pathway of air from atmosphere to gas-exchange surface in the mammalian respiratory system.",
        modelAnswer: [
          "Air passes through trachea, bronchi and bronchioles to alveoli, where exchange occurs across alveolar walls and adjacent capillary endothelium.",
          "A dense capillary network around alveoli provides blood flow for oxygen uptake and carbon dioxide removal.",
        ],
      },
      {
        id: "t9-1-st2",
        question:
          "Describe the roles of cartilage, smooth muscle, goblet cells, cilia and elastic fibres in the gas exchange system.",
        modelAnswer: [
          "Cartilage supports larger airways and reduces collapse. Smooth muscle changes airway diameter and affects airflow resistance. Goblet cells secrete mucus to trap particles and microorganisms. Cilia move mucus toward the throat for removal. Elastic fibres allow stretch during inspiration and recoil during expiration.",
        ],
      },
      {
        id: "t9-1-st3",
        question:
          "Explain the mechanism of inspiration and expiration at rest using changes in thoracic volume and pressure.",
        modelAnswer: [
          "Inspiration: diaphragm contracts and flattens, external intercostals contract and ribs move up and out, thoracic volume increases, intrapulmonary pressure falls below atmospheric, and air enters.",
          "Expiration at rest: diaphragm and external intercostals relax, elastic recoil reduces thoracic volume, intrapulmonary pressure rises above atmospheric, and air leaves.",
        ],
      },
      {
        id: "t9-1-st4",
        question:
          "State three adaptations of alveoli for efficient diffusion and explain how each increases gas transfer rate.",
        modelAnswer: [
          "Large total surface area from many alveoli increases area available for diffusion.",
          "Very thin diffusion barrier (alveolar epithelium plus capillary endothelium) reduces diffusion distance.",
          "Rich capillary supply and continuous ventilation maintain steep partial pressure gradients for oxygen and carbon dioxide.",
        ],
      },
      {
        id: "t9-1-st5",
        question:
          "Explain how smoking can cause chronic bronchitis and emphysema, and how each condition reduces gas exchange efficiency.",
        modelAnswer: [
          "Chronic bronchitis: smoke irritants increase mucus production and damage cilia, causing mucus accumulation, infection and narrowed/inflamed airways; ventilation becomes less effective.",
          "Emphysema: destruction of alveolar walls reduces surface area and loss of elastic tissue impairs recoil, making expiration difficult and reducing effective gas exchange.",
          "Both conditions reduce oxygen transfer to blood, especially during exertion.",
        ],
      },
    ],
  },
};
