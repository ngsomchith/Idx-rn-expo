import React from 'react';
import { ArticleList } from './ShowArticles';
import { ExternalLink } from './ExternalLink';
import { ThemedText } from './ThemedText';

const ArticlesToShow = ({ }) => {

  const articles0 = [
    {
      title: "Delicatessen",
      slogan: "Plats fait-maison",
      courtPresentation: "Plats faits maison préparés à la demande, garantissant fraîcheur et qualité.",
      imageUrl: "laCuisiniere",
      url: 'https://delicatessen.cloud/',
      text: "Content for article 1",
      onActionPress: () => {
        () => {

        }
      },
    },
    {
      title: "Pizzas du Port",
      slogan: "Événements sur mesure",
      courtPresentation: "Événements personnalisés avec des menus adaptés à toutes vos occasions.",
      imageUrl: "pizzasDuPort",
      url: 'https://delicatessen.cloud/',
      text: "Content for article 2",
      onActionPress: () => { /* Handle action for article 2 */ },
    },
    {
      title: "Article 33",
      slogan: "Plats fait-maison",
      courtPresentation: "Plats faits maison préparés à la demande, garantissant fraîcheur et qualité.",
      imageUrl: "image1achete1offert",
      url: 'https://delicatessen.cloud/',
      text: "Content for article 3",
      onActionPress: () => { /* Handle action for article 2 */ },
    },
    // Add more articles as needed
  ];
  return (
      <ArticleList articles={articles0} />
  );
};

export default ArticlesToShow;