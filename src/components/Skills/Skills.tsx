import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, categoryLabels, categoryColors, type SkillCategory } from '../../data/skills';
import { fadeUpCustom } from '../../utils/animations';
import './Skills.css';

const CATEGORIES: SkillCategory[] = ['languages', 'frameworks', 'databases', 'tools'];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = activeCategory
    ? skills.filter((s) => s.category === activeCategory)
    : skills;

  return (
    <section id="skills" className="section skills" aria-labelledby="skills-heading">
      <div className="container">

        {/* Header */}
        <div className="skills__header">
          <span className="section-number">02</span>
          <div className="divider" />
        </div>

        <div className="skills__top">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 id="skills-heading" className="skills__heading">Technology<br />Stack</h2>
          </motion.div>

          {/* Category filters */}
          <motion.div
            className="skills__filters"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            role="group"
            aria-label="Filter skills by category"
          >
            <button
              className={`skills__filter ${activeCategory === null ? 'skills__filter--active' : ''}`}
              onClick={() => setActiveCategory(null)}
              aria-pressed={activeCategory === null}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`skills__filter ${activeCategory === cat ? 'skills__filter--active' : ''}`}
                onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
                style={{ '--cat-color': categoryColors[cat] } as React.CSSProperties}
                aria-pressed={activeCategory === cat}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Skills grid */}
        <div className="skills__grid" role="list" aria-label="Skills list">
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={skill.id}
              className={`skill-node ${hoveredSkill === skill.id ? 'skill-node--hovered' : ''}`}
              role="listitem"
              style={{
                '--node-color': categoryColors[skill.category],
              } as React.CSSProperties}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUpCustom(i * 0.05)}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
              onFocus={() => setHoveredSkill(skill.id)}
              onBlur={() => setHoveredSkill(null)}
              tabIndex={0}
              aria-label={`${skill.name} — ${categoryLabels[skill.category]}`}
            >
              <div className="skill-node__dot" aria-hidden="true" />
              <div className="skill-node__content">
                <span className="skill-node__name">{skill.name}</span>
                <span className="skill-node__category">{categoryLabels[skill.category]}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category legend */}
        <motion.div
          className="skills__legend"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          aria-label="Category legend"
        >
          {CATEGORIES.map((cat) => (
            <div key={cat} className="skills__legend-item">
              <span
                className="skills__legend-dot"
                style={{ background: categoryColors[cat] }}
                aria-hidden="true"
              />
              <span>{categoryLabels[cat]}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
