import { motion } from 'framer-motion';
import { useState, memo } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
  
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTabletOrMobile = useMediaQuery('(max-width:1024px)');

  const navItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'education', label: 'Educación' },
    { id: 'contact', label: 'Contacto' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Actualizar inmediatamente para evitar parpadeo
      setActiveSection(sectionId);
      element.scrollIntoView({ behavior: 'smooth' });
      if (isTabletOrMobile) {
        setIsMenuOpen(false);
      }
    }
  };

  

  const MotionAppBar = motion.create(AppBar);

  return (
    <>
      <MotionAppBar
        position="fixed"
        elevation={0}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        sx={{
          backdropFilter: 'blur(18px)',
          backgroundColor: theme.palette.mode === 'dark'
            ? 'rgba(10,12,20,0.6)'
            : 'rgba(255,255,255,0.72)',
          borderBottom: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.04)'}`,
          boxShadow: theme.palette.mode === 'dark' ? '0 6px 20px rgba(2,6,23,0.6)' : '0 6px 20px rgba(16,24,40,0.06)',
          transition: 'all 0.25s ease-in-out',
          color: theme.palette.text.primary
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ py: { xs: 0.5, sm: 0.75, md: 1 }, minHeight: isTabletOrMobile ? 56 : 64 }}>
            {/* Logo */}
            <div style={{ cursor: 'pointer' }}>
              <Typography
                variant={isMobile ? 'h6' : isTabletOrMobile ? 'h6' : 'h5'}
                component="div"
                sx={{
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: isTabletOrMobile ? '-0.3px' : '-0.5px',
                  fontSize: isTabletOrMobile ? '1.05rem' : undefined
                }}
                onClick={() => scrollToSection('hero')}
              >
                Luis López
              </Typography>
            </div>

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop Navigation (large screens) */}
            {!isTabletOrMobile && (
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                {navItems.map((item) => (
                  <motion.div key={item.id} whileTap={{ opacity: 0.85 }}>
                    <Button
                      onClick={() => scrollToSection(item.id)}
                      sx={{
                        fontWeight: 600,
                        position: 'relative',
                        color: activeSection === item.id ? theme.palette.primary.main : theme.palette.text.primary,
                        background: 'transparent',
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          right: 0,
                          bottom: -6,
                          height: 3,
                          background: activeSection === item.id ? 'linear-gradient(90deg,#3B82F6,#2563EB)' : 'transparent',
                          borderRadius: 2,
                          transform: activeSection === item.id ? 'scaleX(1)' : 'scaleX(0)',
                          transformOrigin: 'left center',
                          transition: 'transform 220ms ease'
                        },
                        '&:hover': {
                          color: theme.palette.primary.main,
                          transform: 'none',
                          '&:after': { transform: 'scaleX(1)', background: 'linear-gradient(90deg,#3B82F6,#2563EB)' }
                        },
                        '&:active': { transform: 'none' },
                        px: 1.5,
                        py: 0.5
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}

                {/* CTA Contact */}
                <Button
                  variant="contained"
                  onClick={() => scrollToSection('contact')}
                  sx={{ ml: 1, px: 3, py: 0.6, fontWeight: 700, borderRadius: 2, '&:hover': { transform: 'none' } }}
                >
                  Contactar
                </Button>

                {/* Theme Toggle */}
                <Box sx={{ ml: 1 }}>
                  <ThemeToggle />
                </Box>
              </Box>
            )}

            {/* Mobile ( y tablets <=1024px) Menu Button */}
            {isTabletOrMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ThemeToggle sx={{ width: 36, height: 36 }} />
                <motion.div whileTap={{ opacity: 0.85 }}>
                  <IconButton
                    edge="end"
                    onClick={() => setIsMenuOpen(true)}
                    sx={{
                      color: theme.palette.text.primary,
                      '&:hover': { backgroundColor: 'rgba(59, 130, 246, 0.08)', transform: 'none' }
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                </motion.div>
              </Box>
            )}
          </Toolbar>
        </Container>
      </MotionAppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: theme.palette.mode === 'dark' 
              ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)'
              : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
            backdropFilter: 'blur(20px)',
          }
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box sx={{ p: 2, borderBottom: `1px solid ${theme.palette.divider}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6" fontWeight={700} color="primary">
              Navegación
            </Typography>
            <IconButton onClick={() => setIsMenuOpen(false)} sx={{ color: theme.palette.text.primary }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ p: 2, flex: 1, overflow: 'auto' }}>
            <List>
              {navItems.map((item) => (
                <ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
                  <motion.div style={{ width: '100%' }} whileTap={{ opacity: 0.85 }}>
                    <ListItemButton
                      onClick={() => scrollToSection(item.id)}
                      selected={activeSection === item.id}
                      sx={{
                        borderRadius: 2,
                        '&.Mui-selected': {
                          background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                          color: 'white'
                        },
                        '&:hover': { transform: 'none' }
                      }}
                    >
                      <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: activeSection === item.id ? 700 : 600 }} />
                    </ListItemButton>
                  </motion.div>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box sx={{ p: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
            <Button variant="contained" fullWidth onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }}>
              Contactar
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default memo(Header, (prevProps, nextProps) => {
  // Solo re-renderizar si activeSection realmente cambió
  return prevProps.activeSection === nextProps.activeSection;
});
