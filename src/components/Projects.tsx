import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Tabs,
  Tab,
  Paper,
  useTheme,
  Modal,
  IconButton
} from '@mui/material';
import {
  GitHub,
  Launch,
  Language,
  School,
  Work,
  Close,
  Visibility
} from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createCardStyles, createTitleStyles, createDividerStyles } from '../styles/cardStyles';

const Projects = () => {
  const theme = useTheme();
  const cardStyles = createCardStyles(theme);
  const titleStyles = createTitleStyles(theme);
  const dividerStyles = createDividerStyles(theme);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [previewImage, setPreviewImage] = useState<{
    src: string;
    alt: string;
    title?: string;
  } | null>(null);

  const handleImageClick = (src: string, title: string) => {
    setPreviewImage({ src, alt: `Proyecto: ${title}`, title });
  };

  const handleClosePreview = () => {
    setPreviewImage(null);
  };

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'web', name: 'Web Apps' },
    { id: 'academic', name: 'Académicos' },
    { id: 'freelance', name: 'Freelance' }
  ];

  const projects = [
    {
      id: 1,
      title: "Sistema de validación de PIN vía WhatsApp",
      description: "Sistema desarrollado para validar PIN de usuarios a través de WhatsApp, implementando comunicación automatizada y validación segura.",
      image: "https://imgs.search.brave.com/vvfZfG06PGYuoz-7mGPBGZuOXanMgyL8RabOdAZaGPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmVjdG9yLWdyYXRp/cy9mb25kby1wYW50/YWxsYS1uZW9uLXBy/b3hpbWFtZW50ZV8y/My0yMTQ4ODkxMTc5/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA",
      technologies: ["Node.js", "TypeScript", "WhatsApp API", "PostgreSQL"],
      category: "web",
      role: "Full-Stack",
      contribution: "Desarrollo completo del sistema de validación, implementación de API de WhatsApp y manejo de base de datos.",
      github: "#",
      demo: "#",
      hasDemo: false
    },
    {
      id: 2,
      title: "Portafolio Personal",
      description: "Sitio web personal desarrollado con React y Material-UI, mostrando mis habilidades y proyectos de desarrollo web.",
      image: "https://imgs.search.brave.com/vvfZfG06PGYuoz-7mGPBGZuOXanMgyL8RabOdAZaGPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmVjdG9yLWdyYXRp/cy9mb25kby1wYW50/YWxsYS1uZW9uLXBy/b3hpbWFtZW50ZV8y/My0yMTQ4ODkxMTc5/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA",
      technologies: ["React", "TypeScript", "Material-UI", "Vite"],
      category: "web",
      role: "Frontend",
      contribution: "Diseño y desarrollo completo del sitio web, implementación de componentes responsivos y animaciones.",
      github: "https://github.com/LuisL16-ui/portafolio?tab=readme-ov-file",
      demo: "https://jllp.dev",
      hasDemo: true
    },
    {
      id: 3,
      title: "Proyecto Académico - Base de Datos",
      description: "Proyecto universitario enfocado en el diseño y desarrollo de bases de datos relacionales utilizando PostgreSQL.",
      image: "https://imgs.search.brave.com/vvfZfG06PGYuoz-7mGPBGZuOXanMgyL8RabOdAZaGPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmVjdG9yLWdyYXRp/cy9mb25kby1wYW50/YWxsYS1uZW9uLXBy/b3hpbWFtZW50ZV8y/My0yMTQ4ODkxMTc5/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA",
      technologies: ["PostgreSQL", "SQL", "Node.js", "Database Design"],
      category: "academic",
      role: "Database",
      contribution: "Diseño de esquema de base de datos, implementación de consultas complejas y optimización de rendimiento.",
      github: "#",
      demo: "#",
      hasDemo: false
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const actionButtonSx = {
    minWidth: 160,
    height: 44,
    fontSize: '0.95rem',
    textTransform: 'none',
    borderRadius: 2,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    px: 2,
    '& .MuiButton-startIcon': {
      mr: 1,
      display: 'inline-flex',
      alignItems: 'center',
    },
    '& .MuiButton-startIcon > svg': {
      fontSize: '1.05rem'
    }
  };

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default'
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                background: theme.palette.gradient?.primary || 'linear-gradient(135deg, #1F2937 0%, #3B82F6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              Proyectos
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 4,
                background: theme.palette.gradient?.primary || 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                mx: 'auto',
                borderRadius: 2,
                mb: 3
              }}
            />
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto', lineHeight: 1.6 }}
            >
              Una selección de proyectos que demuestran mis habilidades técnicas y creatividad en el desarrollo de software
            </Typography>
          </Box>
        </motion.div>

        {/* Category Filter - responsive: segmented Tabs on desktop, scrollable Chips on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Paper
            elevation={2}
            sx={{
              p: { xs: 1, md: 2 },
              mb: 6,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.9) 100%)'
                : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)',
              border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.12)' : 'rgba(59, 130, 246, 0.08)'}`,
              backdropFilter: 'blur(10px)'
            }}
          >
            {/* Desktop: segmented Tabs */}
            {!useMediaQuery(theme.breakpoints.down('md')) ? (
              <Tabs
                value={selectedCategory}
                onChange={(_, newValue) => setSelectedCategory(newValue)}
                variant="standard"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  '& .MuiTabs-flexContainer': { gap: 1 },
                  '& .MuiTab-root': {
                    minWidth: 140,
                    px: 2,
                    py: 0.6,
                    borderRadius: 3,
                    textTransform: 'none',
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    '&.Mui-selected': {
                      color: 'white',
                      background: theme.palette.gradient?.primary || 'linear-gradient(90deg,#3B82F6,#2563EB)'
                    }
                  }
                }}
                aria-label="Filtrar proyectos por categoría"
              >
                {categories.map((category) => (
                  <Tab
                    key={category.id}
                    value={category.id}
                    icon={
                      category.id === 'all' ? <Language /> : category.id === 'web' ? <Language /> : category.id === 'academic' ? <School /> : <Work />
                    }
                    iconPosition="start"
                    label={category.name}
                  />
                ))}
              </Tabs>
            ) : (
              /* Mobile: horizontal scrollable chips */
              <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto', px: 1, py: 1, scrollSnapType: 'x mandatory' }}>
                {categories.map((category) => (
                  <Chip
                    key={category.id}
                    label={category.name}
                    onClick={() => setSelectedCategory(category.id)}
                    clickable
                    color={selectedCategory === category.id ? 'primary' : 'default'}
                    variant={selectedCategory === category.id ? 'filled' : 'outlined'}
                    sx={{
                      minWidth: 96,
                      flex: '0 0 auto',
                      scrollSnapAlign: 'center',
                      fontWeight: 700,
                      px: 2
                    }}
                    avatar={category.id === 'all' ? undefined : undefined}
                  />
                ))}
              </Box>
            )}
          </Paper>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            sx={titleStyles.gradientTitle}
          >
            {selectedCategory === 'all' ? 'Todos los Proyectos' : `Proyectos de ${categories.find(c => c.id === selectedCategory)?.name}`}
          </Typography>
          <Box sx={dividerStyles.gradientDivider} />

          <Box sx={{ 
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 3, md: 4 },
            mx: 'auto',
            maxWidth: '1400px'
          }}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                style={{ 
                  width: '100%',
                  maxWidth: '380px',
                  minWidth: '300px',
                  flex: '1 1 auto'
                }}
              >
                <Card sx={{
                  ...cardStyles.projectCard,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%'
                }}>
                  <Box sx={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
                    <CardMedia
                      component="img"
                      sx={{
                        height: 200,
                        objectFit: 'cover',
                        transition: 'all 0.4s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }}
                      image={project.image}
                      alt={project.title}
                      onClick={() => handleImageClick(project.image, project.title)}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap: 0.5,
                        opacity: 0,
                        transition: 'all 0.28s ease-in-out',
                        borderRadius: 2,
                        '&:hover': {
                          opacity: 1,
                          backgroundColor: 'rgba(0, 0, 0, 0.65)'
                        }
                      }}
                      onClick={() => handleImageClick(project.image, project.title)}
                    >
                      <Visibility sx={{ color: 'white', fontSize: 28 }} />
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'white',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: 1
                        }}
                      >
                        VER
                      </Typography>
                    </Box>
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {project.title}
                    </Typography>
                    
                    <Chip
                      label={project.role}
                      size="small"
                      sx={{
                        mb: 2,
                        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
                        color: theme.palette.mode === 'dark' ? theme.palette.primary.contrastText : theme.palette.primary.main,
                        fontWeight: 500
                      }}
                    />

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2, lineHeight: 1.6 }}
                    >
                      {project.description}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.5, fontStyle: 'italic' }}
                    >
                      <strong>Mi contribución:</strong> {project.contribution}
                    </Typography>

                    {/* Technologies */}
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
                        Tecnologías:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'primary.light',
                              color: theme.palette.mode === 'dark' ? '#3B82F6' : 'white',
                              fontWeight: 500,
                              fontSize: '0.75rem',
                              margin: 0
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </CardContent>

                  {/* Actions */}
                  <CardActions sx={{ p: 3, pt: 0, justifyContent: project.hasDemo ? 'flex-start' : 'center' }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<GitHub />}
                      href={project.github}
                      target="_blank"
                      sx={{
                        ...actionButtonSx,
                        mr: project.hasDemo ? 1 : 0,
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        borderWidth: 1.5,
                        '&:hover': {
                          backgroundColor: theme.palette.primary.main,
                          color: 'white',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease-in-out',
                      }}
                    >
                      Código
                    </Button>

                    {project.hasDemo && (
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<Launch />}
                        href={project.demo}
                        target="_blank"
                        sx={{
                          ...actionButtonSx,
                          backgroundColor: theme.palette.primary.main,
                          color: 'white',
                          '&:hover': {
                            backgroundColor: theme.palette.primary.dark,
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease-in-out'
                        }}
                      >
                        Ver Demo
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              ¿Interesado en colaborar?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Siempre estoy abierto a discutir nuevos proyectos y oportunidades.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: theme.palette.primary.main,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease-in-out'
              }}
              href="#contact"
            >
              Contactar
            </Button>
          </Box>
        </motion.div>

        {/* Image Preview Modal - replicates Education.tsx style */}
        <Modal
          open={Boolean(previewImage)}
          onClose={handleClosePreview}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
            overflowY: 'auto'
          }}
        >
          <Box
            sx={{
              position: 'relative',
              maxWidth: '95vw',
              maxHeight: '95vh',
              outline: 'none',
              display: 'flex',
              flexDirection: 'column',
              my: 'auto'
            }}
          >
            {/* Close button */}
            <IconButton
              onClick={handleClosePreview}
              sx={{
                position: 'absolute',
                top: -16,
                right: -16,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                zIndex: 1000,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                  transform: 'scale(1.1)'
                }
              }}
            >
              <Close />
            </IconButton>

            {previewImage && (
              <Box
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  border: '4px solid white',
                  maxHeight: '90vh',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* scrollable image area */}
                <Box
                  sx={{
                    overflow: 'auto',
                    maxHeight: 'calc(90vh - 80px)',
                    '&::-webkit-scrollbar': {
                      width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                      backgroundColor: 'rgba(0,0,0,0.1)',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      borderRadius: '4px',
                      '&:hover': {
                        backgroundColor: 'rgba(0,0,0,0.5)',
                      }
                    }
                  }}
                >
                  <img
                    src={previewImage.src}
                    alt={previewImage.alt}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      minWidth: '300px'
                    }}
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div style="
                            width: 100%; 
                            height: 300px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
                            color: white;
                            font-size: 24px;
                            font-weight: bold;
                            flex-direction: column;
                            text-align: center;
                          ">
                            <div style="font-size: 48px; margin-bottom: 8px;">📷</div>
                            <div style="font-size: 16px;">Imagen no disponible</div>
                            <div style="font-size: 12px; margin-top: 8px; opacity: 0.8;">Verifica la URL o revisa la conexión</div>
                          </div>
                        `;
                      }
                    }}
                  />
                </Box>

                {/* Fixed title area */}
                <Box
                  sx={{
                    p: 2,
                    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(30, 41, 59, 0.95)' : 'white',
                    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                    flexShrink: 0
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    textAlign="center"
                    sx={{
                      color: theme.palette.mode === 'dark' ? 'white' : 'text.primary'
                    }}
                  >
                    {previewImage.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    textAlign="center"
                    display="block"
                    sx={{
                      color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'text.secondary',
                      mt: 0.5
                    }}
                  >
                    Haz scroll para ver la imagen completa
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default Projects;